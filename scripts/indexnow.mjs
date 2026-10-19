// Soumet les URL du sitemap à IndexNow (Bing, Yandex, Seznam...) : indexation en heures au lieu
// de semaines. ChatGPT Search s'appuie en bonne partie sur l'index de Bing.
// Usage : node scripts/indexnow.mjs            -> DRY RUN (affiche ce qui serait envoyé)
//         node scripts/indexnow.mjs --envoyer  -> envoie pour vrai (action externe : sur go de Simon)
// Prérequis : le site en ligne sert déjà le fichier de clé https://fournia.net/<KEY>.txt
const KEY = '05d77acf4f3e6346c9762e9588ed5a21';
const HOST = 'fournia.net';
const envoyer = process.argv.includes('--envoyer');

const idx = await (await fetch(`https://${HOST}/sitemap-index.xml`)).text();
const maps = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) urls.push(...[...(await (await fetch(m)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));

const cle = await fetch(`https://${HOST}/${KEY}.txt`);
if (!cle.ok) { console.log(`Fichier de clé introuvable en ligne (${cle.status}) : déployer d'abord.`); process.exit(1); }

const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls };
if (!envoyer) { console.log(`DRY RUN : ${urls.length} URL seraient soumises.\n` + urls.join('\n')); process.exit(0); }
const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
console.log(`IndexNow : HTTP ${r.status} (200 ou 202 = reçu) pour ${urls.length} URL.`);
