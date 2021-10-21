import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		age: {
			type: Number,
			trim: true,
			required: true,
		},
		avatar: {
			type: String,
			default: '',
		},
		city: {
			type: String,
			trim: true,
			required: true,
		},
		bio: {
			type: String,
			trim: true,
			maxlenght: 250,
		},
		job: {
			type: String,
			trim: true,
		},
		salary: {
			type: Number,
			trim: true,
			default: 0,
		},
		hobies: [String],
	},
	{ timestamps: true }
);

const user = mongoose.model('user', userSchema);

export default user;
