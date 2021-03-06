const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    shortDesc: { type: String, required: true },
    fullDesc: { type: String, required: true },
    date: {
      type: Date,
      required: true
    },
    categories: String,
    venue: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
    coverImage: { type: String, default: '' },
    organizer: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    },
    comments: [
      {
        text: String,
        date: String,
        author: {
          type: Object
        }
      }
    ]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
