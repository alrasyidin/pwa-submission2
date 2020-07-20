var webPush = require('web-push')

const vapidKeys = {
  "publicKey": "BMIEtTX1fDolDEh4vdCPI24jTcGWAsKW5g3-9vbuYVslrv4bhRsf4dywTs0OK4NL199KPP5GZRQTIHV2iJ1ejoQ",
  "privateKey": "6ezvUCB3s5ka6OCZkgulCBfODya1AOfJG-Ona3Ot_mU"
}


webPush.setVapidDetails(
  'mailto:hamstergeek38@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
var pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/ddplEDNoo8I:APA91bF7pEDH03Sq_3go-BlLK6Ban5GpZ_clCJS3Fpo6l3ARj1kuTuFvyK9FHAGtRTLeY61VVrBBSHpbgd8UxISiB7QVnoxYQHN3Cqk6hCewI1cyOquV8LEf5H7Ifo6JKrW2FBvtrqbx",
  "keys": {
    "p256dh": "BAfoiBGPC0UNgqVN97Gez1VvPNZG/Z0Dnc3GfmKJpcF1ai+Z+YUJgcBRhnv+u+iJ2DkKFXUxry05YL7xJQS/ru8=",
    "auth": "oYTFyPawgoVNC8F1KDYpmQ=="
  }
}

var payload = 'Liverpool VS Manchester United';

var options = {
  gcmAPIKey: '1063320996595',
  TTL: 60
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)