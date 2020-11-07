const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number,
        default:Date.now

    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise Type"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name"
            },
            duration: {
                type: Number,
                required: "Duration(Minutes)"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},


{
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 