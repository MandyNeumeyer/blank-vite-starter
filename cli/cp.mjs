import fs from 'fs';

const name = process.argv[2];

if (name === undefined) {
	console.log('SCRIPT: cp');
	console.log('NAME: create page');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run cp Info');
	console.log('RESULT: creates page /scr/components/Info.jsx');
	process.exit();
} else {
	const content = `
export const Page${name} = () => {
	return (
		<div className="${name.charAt(0).toUpperCase() + name.slice(1)}">
			<p>${name} component.</p>
		</div>
	);
};
	`;
	(async () => {
		fs.writeFile(`./src/components/${name}.jsx`, content.trim(), () => {});
	})();
}