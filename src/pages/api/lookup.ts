import {NextApiHandler} from 'next';

const handler: NextApiHandler = async (req, res) => {
	if (!req.query.id) {
		return res
			.status(422)
			.json({message: 'You must specify an id as a query param'});
	}

	const user = await fetch('https://discord.com/api/v8/users/' + req.query.id, {
		headers: {
			Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
		},
	}).then(res => res.json());

	res.json(user);
};

export default handler;
