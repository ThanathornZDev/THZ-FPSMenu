--[[
    Script : THZ-FPSMenu [Open Source]
    Description : Thank you source code fps boost from xenos_fpsbooster https://github.com/XenoS-ITA/xenos_fpsbooster
    Discord : https://discord.gg/NASrKDuUuy
    Warning : This script is not for sale. You cannot sell this script.
    Anothor : Thanathorn Kongmak [THZDEV]
    Donate : Promptpay 098-046-9752 or KBank 123-1-66738-1 [Thanks for the tip for the coffee.]
]]

fx_version 'adamant'
game 'gta5'
description 'THZ Developer'

client_script {
    "config.lua",
    "core/client.lua",
}

server_scripts {
    "config.lua",
	"core/server.lua"
}

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/styles.css',
	'html/script.js',
}

exports {
    'THZOPENMENU'
}
