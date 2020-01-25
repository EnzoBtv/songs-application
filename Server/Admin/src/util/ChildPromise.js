const { exec } = require("child_process");

export const execPromise = (command, execOptions) => {
	return new Promise((resolve, reject) => {
		exec(command, execOptions, (error, stdout, stderr) => {
			if (error || !stdout) {
				return reject({ error, stderr });
			}
			return resolve({ stdout });
		});
	});
};

module.exports = execPromise;
