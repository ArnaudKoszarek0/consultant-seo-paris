export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(env.ALLOWED_ORIGIN),
      });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, env.ALLOWED_ORIGIN);
    }

    try {
      const data = await request.json();
      const { name, email, website, message } = data;

      // Validation
      if (!name || !email || !message) {
        return jsonResponse({ error: 'Champs requis manquants' }, 400, env.ALLOWED_ORIGIN);
      }

      if (!isValidEmail(email)) {
        return jsonResponse({ error: 'Email invalide' }, 400, env.ALLOWED_ORIGIN);
      }

      // Rate limiting basique via CF
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

      // Envoi email via MailChannels
      const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: env.TO_EMAIL, name: 'Arnaud Koszarek' }],
          }],
          from: {
            email: 'contact@consultant-seo.paris',
            name: 'Formulaire consultant-seo.paris',
          },
          reply_to: { email, name },
          subject: `[Contact SEO] ${name} - ${website || 'pas de site'}`,
          content: [{
            type: 'text/plain',
            value: `Nouveau contact depuis consultant-seo.paris\n\n` +
              `Nom : ${name}\n` +
              `Email : ${email}\n` +
              `Site : ${website || 'Non renseigné'}\n\n` +
              `Message :\n${message}\n\n` +
              `---\nIP : ${ip}\nDate : ${new Date().toISOString()}`,
          }],
        }),
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error('MailChannels error:', errText);
        return jsonResponse({ error: 'Erreur envoi email' }, 500, env.ALLOWED_ORIGIN);
      }

      return jsonResponse({ success: true, message: 'Message envoyé' }, 200, env.ALLOWED_ORIGIN);

    } catch (err) {
      console.error('Error:', err);
      return jsonResponse({ error: 'Erreur serveur' }, 500, env.ALLOWED_ORIGIN);
    }
  },
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
    },
  });
}
