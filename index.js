const Discord = require("discord.js");
const bot = new Discord.Client();
// const LanguageDetect = require('languagedetect');
// const lngDetector = new LanguageDetect();

const dict = {
    "c o o l": ["đ"],
    "f r e e": ["đ"],
    "s o o n": ["đ"],
    "s o s": ["đ"],
    "a t m": ["đ§"],
    "n e w": ["đ"],
    "a b c": ["đ¤"],
    "t o p": ["đ"],
    "o n": ["đ"],
    "i d": ["đ"],
    "v s": ["đ"],
    "a b": ["đ"],
    "c l": ["đ"],
    "w c": ["đž"],
    "n g": ["đ"],
    "o k": ["đ"],
    "u p": ["đ"],
    "t m": ["âĸī¸"],
    0: ["0âŖ"],
    1: ["1âŖ"],
    2: ["2âŖ"],
    3: ["3âŖ"],
    4: ["4âŖ"],
    5: ["5âŖ"],
    6: ["6âŖ"],
    7: ["7âŖ"],
    8: ["8âŖ"],
    9: ["9âŖ"],
    "1 0": ["đ"],
    "*": ["*âŖ"],
    "+": ["â"],
    "-": ["â"],
    "#": ["#ī¸âŖ"],
    "! !": ["âŧī¸"],
    "! ?": ["âī¸"],
    "!": ["â", "â"],
    "?": ["â", "â"],
    "/": ["đĨ"],
    a: ["đĻ", "đ°ī¸", "đŧ"],
    b: ["đ§", "đąī¸"],
    c: ["đ¨", "ÂŠī¸"],
    d: ["đŠ"],
    e: ["đĒ", "đ§"],
    f: ["đĢ"],
    g: ["đŦ"],
    h: ["đ­"],
    i: ["đŽ", "âšī¸", "đ§", "đ"],
    j: ["đ¯"],
    k: ["đ°"],
    l: ["đą", "đ"],
    m: ["đ˛", "ãŊī¸", "âī¸"],
    n: ["đŗ"],
    o: ["đ´", "đžī¸", "â­"],
    p: ["đĩ", "đŋī¸"],
    q: ["đļ"],
    r: ["đˇ", "ÂŽī¸"],
    s: ["đ¸"],
    t: ["đš", "âī¸"],
    u: ["đē"],
    v: ["đģ"],
    w: ["đŧ", "ã°ī¸"],
    x: ["đŊ", "â", "â", "âī¸"],
    y: ["đž"],
    z: ["đŋ", "đ¤"],
};
const jp = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
bot.login(TOKEN);

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    // bot.user.setActivity('Minecraft', { type: 'STREAMING', url: 'https://www.twitch.tv/pokimane' })
    bot.user.setActivity("!react", { type: "LISTENING" });
    
    // console.log(lngDetector.detect('hayato'));
    // console.log(lngDetector.detect('dame da ne'));

    // bot.user.setPresence({
    //     game: {
    //         name: 'Minecraft',
    //         type: "Playing"
    //         // ,
    //         // url: "https://www.ardagurcan.com/"
    //     }
    // });
});

bot.on("message", async (msg) => {
    if ((msg.guild) && (msg.guild.id != "753881527921672223" || Math.random() < 0.05)) {
        if (msg.author.id == "324495112728084482") {
            try {
                msg.react("753205231449407499");
            } catch {}
        } else if (
            msg.author.id == "148399979323588608" ||
            jp.test(msg.content)
        ) {
            try {
                msg.react("734512326002081824");
            } catch {}
        } else if (msg.author.id == "622858748905521161") {
            try {
                msg.react("777190262370992169");
            } catch {}
        }
    }
    // else if(msg.author.id == "652922405374918686" || msg.author.id == "622858748905521161")
    // {
    //     try
    // 	{
    //         msg.delete()

    // 	}
    // 	catch{}
    // }

    if (msg.content.startsWith("!react")) {
        let lm;
        await msg.channel.messages.fetch({ limit: 2 }).then((res) => {
            lm = res.array()[1];
        });
        let reaction = msg.content
            .slice(7)
            .replace(" ", "")
            .toLowerCase()
            .split("")
            .join(" ");
        msg.delete();

        for (const [key, value] of Object.entries(dict)) {
            if (reaction.indexOf(key) > -1) {
                for (let i = 0; i < value.length; i++) {
                    if (reaction.indexOf(value[i]) < 0) {
                        reaction = reaction.replace(key, value[i]);
                    } else if (i == value.length - 1) {
                        reaction = reaction.replace(key, "");
                    }
                }
            }
        }
        reaction = reaction.split(" ");

        for (let i = 0; i < reaction.length; i++) {
            if (reaction[i] != "") {
                try {
                    await lm.react(reaction[i]);
                } catch (err) {}
            }
        }
    }
});
