const f2 = () => {
    console.log('[start f2]')
    console.log('f2 running...')
    console.log('[about to call f1 from file1.js...]')
    f1()
    console.log('[finish f2]')
}


f2()