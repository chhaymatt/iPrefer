const games = [
	{
		name: "Valorant",
		gif: "https://media1.giphy.com/media/sUOkBnwf8157cVGE57/giphy.gif?cid=ecf05e4703e5a5ex62s18ss4j1acjuz0ewmds422kvnerxnu&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/d54e6Fy.png",
		backgroundImage: "https://i.imgur.com/xiepxnK.jpg",
		logo: "https://i.imgur.com/UJNrmUb.png",
		learnMoreLink: "https://playvalorant.com/",
	},
	{
		name: "Astroneer",
		gif: "https://media.tenor.com/pA5ZvEn_SiIAAAAC/astroneer-astronaut.gif",
		imagePop: "https://i.imgur.com/A8eIKcz.png",
		backgroundImage: "https://i.imgur.com/ddPOnuq.png",
		logo: "https://i.imgur.com/NYxZ3Ur.png",
		learnMoreLink: "https://astroneer.space/",
	},
	{
		name: "Among Us",
		gif: "https://media4.giphy.com/media/ZLAUOpqEMsqVYcuOWP/giphy.gif?cid=ecf05e47a8lygz2xg66t61c6z3nt1eyihhxdhil78772jloh&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/EMNN03o.png",
		backgroundImage: "https://i.imgur.com/TsW8zLY.jpg",
		logo: "https://i.imgur.com/8IwxsZH.png",
		learnMoreLink: "https://www.innersloth.com/games/among-us/",
	},
	{
		name: "Counter-Strike: Global Offensive",
		gif: "https://i.imgur.com/QkPGZzg.gif",
		imagePop: "https://i.imgur.com/i9JtYUk.png",
		backgroundImage: "https://i.imgur.com/qOXZUe0.png",
		logo: "https://i.imgur.com/QRVVYvB.png",
		learnMoreLink: "https://blog.counter-strike.net/",
	},
	{
		name: "Dead by Daylight",
		gif: "https://media1.giphy.com/media/JmsU3a2B7IGwxpEqHR/giphy.gif?cid=ecf05e47zlycj5xmpeywvvp2o4m690xwqd552quuow8d60ys&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/7fkkmGd.png",
		backgroundImage: "https://i.imgur.com/7e8wAIG.png",
		logo: "https://i.imgur.com/eLRRYIk.png",
		learnMoreLink: "https://deadbydaylight.com/",
	},
	{
		name: "Fortnite",
		gif: "https://media2.giphy.com/media/EluFWEdnZtvqwZFTQH/giphy.gif?cid=ecf05e47vwlpu23b1ju0m0y4ji6vo2vc6c3obtf12ncehz0h&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/uo4ya1K.png",
		backgroundImage: "https://i.imgur.com/r7aoTj8.png",
		logo: "https://i.imgur.com/FEdSqsN.png",
		learnMoreLink: "https://www.epicgames.com/fortnite/en-US/",
	},
	{
		name: "League of Legends",
		gif: "https://media2.giphy.com/media/2sfHBti8mqSO5Bhlqq/giphy.gif?cid=ecf05e476wujgv4s76ash05itqp4jeisws06qq0enbaa9rcr&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/cD2V1P4.png",
		backgroundImage: "https://i.imgur.com/cxuTEi9.jpg",
		logo: "https://i.imgur.com/UX8qvtc.png",
		learnMoreLink: "https://www.leagueoflegends.com/en-au/",
	},
	{
		name: "Mario Kart",
		gif: "https://i.imgur.com/mlPK45f.gif",
		imagePop: "https://i.imgur.com/QOFOMdM.png",
		backgroundImage: "https://i.imgur.com/PZjLdwW.jpg",
		logo: "https://i.imgur.com/lFheZch.png",
		learnMoreLink:
			"https://www.nintendo.com.au/games/nintendo-switch/mario-kart-8-deluxe",
	},
	{
		name: "Minecraft",
		gif: "https://media3.giphy.com/media/HCLbhUDRzDxbUClyxl/giphy.gif?cid=ecf05e4738yrg17tul9c4rhj6vy3dqj3jc3rzjywu4phbo8x&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/mLCFljG.png",
		backgroundImage: "https://i.imgur.com/ShavWYk.jpg",
		logo: "https://i.imgur.com/IobbWwA.png",
		learnMoreLink: "https://www.minecraft.net/en-us",
	},
	{
		name: "Overwatch 2",
		gif: "https://media3.giphy.com/media/STZnLEJxMIJ16qetcj/giphy.gif?cid=ecf05e47e38m641isfrlvxvdg4qoqy4o9pwb9ze2c5uviqrm&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/0N283zn.png",
		backgroundImage: "https://i.imgur.com/6etKID1.jpg",
		logo: "https://i.imgur.com/aSxRVcN.png",
		learnMoreLink: "https://overwatch.blizzard.com/en-us/",
	},
	{
		name: "PlateUp!",
		gif: "https://i.imgur.com/G7PedTT.gif",
		imagePop: "https://i.imgur.com/NSBbZs3.png",
		backgroundImage: "https://i.imgur.com/ueJ795F.jpg",
		logo: "https://i.imgur.com/vuUShLP.png",
		learnMoreLink: "https://www.plateupgame.com/",
	},
	{
		name: "Propnight",
		gif: "https://i.imgur.com/FrsGmYN.gif",
		imagePop: "https://i.imgur.com/6ZYL1hN.png",
		backgroundImage: "https://i.imgur.com/W6ksMkK.jpg",
		logo: "https://i.imgur.com/Wntb6vt.png",
		learnMoreLink: "https://www.propnight.com/",
	},
	{
		name: "Raft",
		gif: "https://media.tenor.com/DeRaWfAyU5IAAAAC/shark-raft.gif",
		imagePop: "https://i.imgur.com/oUHNE8t.png",
		backgroundImage: "https://i.imgur.com/XMHzPCP.png",
		logo: "https://i.imgur.com/Ldf96Xs.png",
		learnMoreLink: "https://raft-game.com/",
	},
	{
		name: "Roblox",
		gif: "https://media.tenor.com/-Eo0c-54770AAAAC/roblox-noob-roblox.gif",
		imagePop: "https://i.imgur.com/uAyLhcW.png",
		backgroundImage: "https://i.imgur.com/JXlTOQH.png",
		logo: "https://i.imgur.com/bMNBMFR.png",
		learnMoreLink: "https://www.roblox.com/",
	},
	{
		name: "RuneScape",
		gif: "https://media2.giphy.com/media/XxqDdWZYXGHtfx1uO8/giphy.gif?cid=ecf05e47b2bs1zo4yr55il4ats1ke9alcqvf2ckxr796xdqv&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/2IOJKbz.png",
		backgroundImage: "https://i.imgur.com/W8RjwcJ.jpg",
		logo: "https://i.imgur.com/w1svjxL.png",
		learnMoreLink: "https://play.runescape.com/",
	},
	{
		name: "Rust",
		gif: "https://media3.giphy.com/media/ENcUVunGzRnrCBmua0/giphy.gif?cid=ecf05e471gi9dh08r4z2o4ezay4aj5uzikmccnw13djegg2t&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/sNJndV4.png",
		backgroundImage: "https://i.imgur.com/jiB8kkS.jpg",
		logo: "https://i.imgur.com/xv09BJI.png",
		learnMoreLink: "https://rust.facepunch.com/",
	},
	{
		name: "Stardew Valley",
		gif: "https://media2.giphy.com/media/ecNN1uKqgRaKs/giphy.gif?cid=ecf05e473sedlxv9erym4axxpenvwoq3sn98xalj56hxgkad&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/NHx9xaR.png",
		backgroundImage: "https://i.imgur.com/wELWr0o.png",
		logo: "https://i.imgur.com/05aEKAx.png",
		learnMoreLink: "https://www.stardewvalley.net/",
	},
	{
		name: "World of Warcraft",
		gif: "https://media1.giphy.com/media/21PeokB8uIQvjIhVO5/giphy.gif?cid=ecf05e47yzhuz7qnb38o6616x1hqwz9vrhxjx38kv2topbpd&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/ykhvBGc.png",
		backgroundImage: "https://i.imgur.com/agsqhAG.png",
		logo: "https://i.imgur.com/H5RU20s.png",
		learnMoreLink: "https://worldofwarcraft.com/en-us/",
	},
];

export default games;
