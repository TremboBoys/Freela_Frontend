module.exports = {
    compilerOptions: {
        // treat any tag that starts with passage- as custom elements
        isCustomElement: (tag) => tag.startsWith('passage-'),
    }
}