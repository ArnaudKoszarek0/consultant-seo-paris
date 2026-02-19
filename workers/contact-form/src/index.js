export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(env.ALLOWED_ORIGIN) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, env.ALLOWED_ORIGIN);
    }

    try {
      const data = await request.json();
      const { name, email, website, message } = data;

      if (!name || !email || !message) {
        return jsonResponse({ error: 'Champs requis manquants' }, 400, env.ALLOWED_ORIGIN);
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return jsonResponse({ error: 'Email invalide' }, 400, env.ALLOWED_ORIGIN);
      }

      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const timestamp = new Date().toISOString();

      // Send to Telegram
      const telegramText = `📩 Nouveau contact consultant-seo.paris\n\n` +
        `Nom : ${name}\n` +
        `Email : ${email}\n` +
        `Site : ${website || 'Non renseigné'}\n\n` +
        `Message :\n${message}\n\n` +
        `IP : ${ip}\nDate : ${timestamp}`;

      const tgRes = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: 'HTML',
        }),
      });

      if (!tgRes.ok) {
        const err = await tgRes.text();
        console.error('Telegram error:', err);
        return jsonResponse({ error: 'Erreur envoi' }, 500, env.ALLOWED_ORIGIN);
      }

      return jsonResponse({ success: true, message: 'Message envoyé' }, 200, env.ALLOWED_ORIGIN);

    } catch (err) {
      console.error('Error:', err);
      return jsonResponse({ error: 'Erreur serveur' }, 500, env.ALLOWED_ORIGIN);
    }
  },
};

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
