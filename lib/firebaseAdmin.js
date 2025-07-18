// firebaseAdmin.js

import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "game-site-5ba80",
      clientEmail: "firebase-adminsdk-fbsvc@game-site-5ba80.iam.gserviceaccount.com",
      privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiuzP5eYzpAifN
phCMVViSE+3EM4matNaVGvhWfn3XVWKh/rG3a8ZUozk61sXEAtF/QFvh1AlGC/pm
QLq7ntrg6dr1laMuHrwE2Twi8KGsMYapF0zTj27eTXfP7SK/FXQRhHqCQnN5y3hP
CGfWA0ONfMie1ye2oB3m1j2+HoJCyk3oeeFaHxwYVILYIWMm4mgOC3JAJbWvbfPL
/41QhpC7C9Iro5RTk1cmOgqT2/tfpC7cBqht5dVxpeSYmAG4UmQnsGziri7mk9Yc
lMJC/oC7xmPq8SKPdiUHg0J4LI7pfm7C5G6OrFgdbSacHzkQ8WSk90jvqqaXgAA+
b1oZk6JLAgMBAAECggEACvSS/tTUsOv8THB8RSUvMRXWhemU4+jrxjC4ISe1mPn1
ZShjVlnud0yphCyfyMx4D20lImlwB9GPDH0Z0JrCkEAr4QRBt+HuPl4tUJyT4BR2
V0srfWgbZgcyGznugvt3Qm7vJVH5zFoUKwsUCe135UdgifYqBRFlNDxnbCNJh0kK
2hcC2L3wvG4gqwujPkUaahBjVolSriNVfOT/AZcnTK5iXWPoASMauuUxuv9sZv2R
YOaK/1DPQmxMHHAkp6/Onz+aXcTXoIB+ADJSwuj07V//YCQ9axzSe2EkSt0VZVpN
QwUeQnVfvYs0NU8HVc1Kkrd43N6ARDyn7MlL75OsRQKBgQDVKOVS4i6bhyRdjNxa
Sxj/pXGznFU3TFvMyFhiMNglxDOrfGOVGDhpKq5QJ5ouGa+0OmrRxZo37O7gQ1nm
We7gHOWXl+n2GxGT2qhVb+x2tNovGMTlD3Pf/B3ZkK+TegqSAgetDr8Bmkd19m8x
5Ef7jq6xsSJG8ED/YvJ5H5P85QKBgQDDb8DU2yMqYL0hfeW7dSMVZLQr4EPBaeeB
uknYRUy7DahEcDrfS9GrD9Ihok3yYjwGPm2BTDhzd69/MuYwXb6QfBsSYof/Ct70
NuODRRWv/WUOnQFEUFZtEYTE8tSeW7rhKCdaQ8Q2lXoxk7Dk58TlRpbDbe7DZrAg
KwczPlBfbwKBgHzLqZ8h3smdkFPY4TVX3DXnxa6zK0zpvqEg9mXeVN2fheSzOZYT
jQs9OrqgxOqSjUTGIr3Xo5d0dtIDfIGZS3oYUO60uPwmEt9uV7lVgqpo7Yg/Rx8Y
Me4Dq/IxfCmqfL/Iwne2N2uXyJiug6FBFkeX3H0ZyIihplwesPjq3PhlAoGAaVO5
IP5ZHWW1iG9JeJXQqp7zWxIqcfqZghjb42q1x7m8jeXOVLmP7hlArk/Cona+0r6i
VaS2Z8SBGJRd6oMbSNMZ4/amRJWfQw6x3vVEkuyFojKLlD2X1oAyhdI5NH9LYD07
uDH9dU1p5X4rP7KJMuewKPL+UuDs2ulVoBBdUJECgYBAXJCb3N/cU8Cu8mwKcAIj
NEYwmdk0AIp2RhQbtptjR99oSjoU8a2opgcJmoc4ZbPP5sl17dqX+98oGc40Lo7o
rElTrjkkG4k8UiAOXXi9X55vIPG0KOmwPol8vUgFoZDRBEwLGwpO8io+Ankk0GJb
DIKEz5Ru2zn4ek+FsomkWg==
-----END PRIVATE KEY-----`,
    }),
  });
}

export const db = admin.firestore();
