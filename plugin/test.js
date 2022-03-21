class BasicPlugin {
    constructor(options) {
        console.log(options)
        this.options = options || {
            env: "dev"
        };
    }
    apply(compiler) {
        // console.log(compiler.hooks.result)
        compiler.hooks.emit.tapAsync(
            'MyExampleWebpackPlugin',
            (compilation, callback) => {
                console.log('This is an example plugin!');
                console.log(
                    'Here’s the `compilation` object which represents a single build of assets:',
                    compilation
                );

                // Manipulate the build using the plugin API provided by webpack
                compilation.addModule(/* ... */);

                callback();
            }
        );
    }
}

module.exports = BasicPlugin;