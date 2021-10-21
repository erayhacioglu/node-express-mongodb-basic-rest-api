import users from '../models/userModel.js';

export const getAllUsers = async (req, res,next) => {
	try {
		const allUsers = await users.find({}, { __v: 0 });

		if (allUsers) {
			return res.status(200).json(allUsers);
		}
	} catch (error) {
		return res.status(500).json({message:error.message});
	}
};

export const getSingleUser = async (req, res) => {
	try {
		const { id } = req.params;

		if (id) {
			const singleUser = await users.findById(id);

			if (singleUser) {
				return res.status(200).json(singleUser);
			}else{
				return res.status(404).json({message:'User does not exist'});
			}
			
		}
	} catch (error) {
		return res.status(500).json({message:error.message});
	}
};

export const addNewUser = async (req, res) => {
	try {
		const { name, age, avatar, city, bio, job, salary, hobies } = req.body;

		if (!name || !age || !city)
			return res.status(400).json({ message: 'Please do not leave blank' });

		const user = await users.findOne({ name });

		if (user) return res.status(400).json({ message: 'This user already exists' });

		if (bio.length > 250)
			return res
				.status(400)
				.json({ message: 'Bio must be at least 250 characters.' });

		const newUser = new users({
			name,
			age,
			avatar,
			city,
			bio,
			job,
			salary,
			hobies,
		});

		await newUser.save();

		return res.status(201).json(newUser);
	} catch (error) {
		return res.status(500).json({message:error.message});
	}
};

export const updateUser = async (req, res,next) => {
	try {
		const { id } = req.params;

		if (id) {
			const updatedUser = await users.findByIdAndUpdate({ _id: id }, req.body, {
				new: true,
			});

			if (updatedUser) {
				return res.status(200).json(updatedUser);
			} else {
				return res.status(404).json({message:'User does not exist'});
			}
		}
	} catch (error) {
		return res.status(500).json({message:error.message});
	}
};

export const deleteUser = async (req, res,next) => {
	try {
		const { id } = req.params;

		if (id) {
			const deletedUser = await users.findByIdAndDelete({ _id: id });

			if (deletedUser) {
				return res.status(200).json({ message: 'User deleted' });
			} else {
				return res.status(404).json({message:'User does not exist'});
			}
		}
	} catch (error) {
		return res.status(500).json({message:error.message});
	}
};
