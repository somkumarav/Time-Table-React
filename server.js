const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

let data = [];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const readDB = async () => {
  const snapshot = await db.collection('subjects').get();
  snapshot.forEach((doc) => {
    // console.log(doc.data().name);
    const item = {
      id: doc.data().id,
      subject: doc.data().subject,
      name: doc.data().name,
      periods: doc.data().periods,
      faculty: doc.data().faculty,
      slot: doc.data().slot,
      subjectCode: doc.data().subjectCode,
      classroomLink: doc.data().classroomLink,
      meetLink: doc.data().meetLink,
    };
    data.push(item);
  });
};
readDB();

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log('port 5000');
});
