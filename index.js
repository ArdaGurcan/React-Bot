const Discord = require("discord.js");
const bot = new Discord.Client();
// const LanguageDetect = require('languagedetect');
// const lngDetector = new LanguageDetect();

const dict = {
    "c o o l": ["🆒"],
    "f r e e": ["🆓"],
    "s o o n": ["🔜"],
    "s o s": ["🆘"],
    "a t m": ["🏧"],
    "n e w": ["🆕"],
    "a b c": ["🔤"],
    "t o p": ["🔝"],
    "o n": ["🔛"],
    "i d": ["🆔"],
    "v s": ["🆚"],
    "a b": ["🆎"],
    "c l": ["🆑"],
    "w c": ["🚾"],
    "n g": ["🆖"],
    "o k": ["🆗"],
    "u p": ["🆙"],
    "t m": ["™️"],
    0: ["0⃣"],
    1: ["1⃣"],
    2: ["2⃣"],
    3: ["3⃣"],
    4: ["4⃣"],
    5: ["5⃣"],
    6: ["6⃣"],
    7: ["7⃣"],
    8: ["8⃣"],
    9: ["9⃣"],
    "1 0": ["🔟"],
    "*": ["*⃣"],
    "+": ["➕"],
    "-": ["➖"],
    "#": ["#️⃣"],
    "! !": ["‼️"],
    "! ?": ["⁉️"],
    "!": ["❗", "❕"],
    "?": ["❓", "❔"],
    "/": ["🥖"],
    a: ["🇦", "🅰️", "🔼"],
    b: ["🇧", "🅱️"],
    c: ["🇨", "©️"],
    d: ["🇩"],
    e: ["🇪", "📧"],
    f: ["🇫"],
    g: ["🇬"],
    h: ["🇭"],
    i: ["🇮", "ℹ️", "🕧", "🕕"],
    j: ["🇯"],
    k: ["🇰"],
    l: ["🇱", "🕒"],
    m: ["🇲", "〽️", "Ⓜ️"],
    n: ["🇳"],
    o: ["🇴", "🅾️", "⭕"],
    p: ["🇵", "🅿️"],
    q: ["🇶"],
    r: ["🇷", "®️"],
    s: ["🇸"],
    t: ["🇹", "✝️"],
    u: ["🇺"],
    v: ["🇻"],
    w: ["🇼", "〰️"],
    x: ["🇽", "❌", "❎", "✖️"],
    y: ["🇾"],
    z: ["🇿", "💤"],
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
