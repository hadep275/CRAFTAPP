import {db} from "../mongoose.js";

const contactSchema = new db.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = db.model('Contact', contactSchema);

export default Contact;
