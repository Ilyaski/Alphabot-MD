const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "kalybot-Mdོ x ilyas-kamali"
global.ownername= "ᴹᴿ᭄ ɪʟʏᴀs ×፝֟͜×"
global.myweb ="https://api-alphabot.herokuapp.com/"
global.youtube = "NOTHING"
global.github = "https://ilyasski.github.io/"
global.ownernomer = "212625451590"
global.ownernomerr = "+212625451590"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/6aff079fb273e2d122a3c.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["212625451590","212625407041","212614252660","212654986434"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Ilyaskamalibot-Mdོ /n' //sticker wm
global.author = 'Created By ilyas kamali' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['🌚','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗',
    admin: 'لا يمكن استخدام هذا الأمر إلا من قبل الأدمين  !',
    botAdmin: 'لا يمكن استخدام هذا الأمر إلا عندما يصبح الروبوت أدمين!',
    owner: 'لا يمكن استخدام هذا الأمر إلا من قبل المالك!',
    group: 'لا يمكن استخدام هذا الأمر إلا في مجموعات!',
    private: 'لا يمكن استخدام هذا الأمر إلا في الخاص !',
	bot: 'ميزات خاصة لمستخدمي عدد البوت',
    errtoimg: 'عذرًا ، لا يدعم حاليًا ملصق Gif!',
    wait: '⏳يتم معالجتها ',
	lockCmd: 'لم يتم تنشيط الميزة من قبل المالك!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
