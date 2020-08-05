module.exports = {
    concurrency: 1,
    apiKey: '',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1000, height: 660, name: 'chrome'},
        // Add mobile emulation devices in Portrait mode
    ],
    // set batch name to the configuration
    batchName: 'Ultrafast Batch'
}