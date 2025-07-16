const base64 = process.env.FIREBASE_PRIVATE_KEY_BASE64;
const decodedKey = Buffer.from(base64, 'base64').toString('utf-8');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: decodedKey,
  }),
});
