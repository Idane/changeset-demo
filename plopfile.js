export default function (plop) {
    // create your generators here
    plop.setGenerator('package', {
        description: 'package',
        prompts: [
            {
                type: 'input',
                name: 'packageName',
                message: 'What is your package name?'
            },
            {
                type: 'input',
                name: 'team',
                message: 'What is your team name?'
            }
        ], // array of inquirer prompts
        actions: [
            {
                type: 'add',
                path: 'packages/{{packageName}}/package.json',
                templateFile: '.templates/package.json.hbs'
            }
        ]  // array of actions
    });
};