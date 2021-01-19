const { password } = require("../config")

exports.getArg = (arg) => {
    let index = process.argv.indexOf(arg)
    if (index === -1) return null
    else return process.argv[index + 1]
}

exports.configLog = prod => {
    let message = `
        \nSetting up ${prod ? 'PROD' : 'TEST'} configuration...
        \n=================================================
    `
    console.log(message)
}

exports.setPassword = (prod, password) => {

    if (prod && !password) {
        let message = `
            \nWARNING - A Password is required if running in production!
            \n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        `
        console.log(message)
        process.exit(1)
    }

    if (!password) {
        let message = `
            \nNo password specified, setting to default 'hackme'
            \n**************************************************
        `
        console.log(message)
        return 'hackme'
    } else {
        let message = `
            \nSetting password to value: ${password}
            \n***********************************************
        `
        console.log(message)
        return password
    }
}
