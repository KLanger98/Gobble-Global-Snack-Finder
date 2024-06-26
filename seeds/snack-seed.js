const Snack = require('../Models/Snack')

const snackData = [
    {
        snack_name: 'Maltesers',
        brand_name: 'Mars',
        snack_image: 'https://www.maltesers.com.au/sites/g/files/fnmzdf1086/files/2022-04/maltesers_140_au2.png',
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Snickers',
        brand_name: 'Mars',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.worldofsnacks.com%2Fuploads%2F1%2F3%2F1%2F2%2F13127180%2Fs643667121527569464_p60_i1_w640.jpeg&f=1&nofb=1&ipt=97697e3c4b4689f733b23c9b7034942378f9a45ab5cc91b82504ac8643e1559e&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Hot Cross Buns',
        brand_name: 'Kytons',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkytonsbakery.com.au%2Fwp-content%2Fuploads%2F2020%2F07%2FHot-Cross-Buns_12-Pack-w-buns-lo-res.jpg&f=1&nofb=1&ipt=8d7e6e11cc3549f8864ac7e33e6ad966f6a4d14e68c405455e70c5089d503fb9&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Fruchocs Milk',
        brand_name: 'Menz',
        snack_image: "https://www.menz.com.au/cdn/shop/products/FruChocs_150g_large.png?v=1689750754",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Tim Tams',
        brand_name: 'Arnotts',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sweetgenie.co.uk%2Fapp%2Fuploads%2F2022%2F03%2FArnotts-Tim-Tam-Original-Chocolate-Single-Bar-18g.jpg&f=1&nofb=1&ipt=584ac523d3341af5872e65b7f1c0ce5367d53b060003d022e6d89b3d47a89e4a&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Leibniz Choco Milk',
        brand_name: 'Leibniz',
        snack_image: "https://www.leibniz.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F151636%2F1059x438%2F4fe5c88825%2Fleibniz-choco-vollmilch-listing.png%2Fm%2F&w=3840&q=75",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Ritter: Butter Biscuit',
        brand_name: 'Ritter',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffree-duty.ru%2Fimage%2Fcache%2F23voptypu1r4c1ykbmthf4b7-1000x1000.jpg&f=1&nofb=1&ipt=b155405c757d893631d0391fc3f5ef0473c6a92d29e9e8031742ffb0d56fef02&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Duplo',
        brand_name: 'Ferrero',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CdI4xorUKkH8xotB7MQRjQAAAA%26pid%3DApi&f=1&ipt=f38d5808cdc039b4267ab77662ef42ff2aa97f2bb78778b21ac49a59e1b82d82&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Gummy Bears',
        brand_name: 'Haribo',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.polishdelionline.com%2Fuploads%2F8%2F2%2F6%2F1%2F82611150%2Fs784923297520859073_p351_i1_w1222.jpeg&f=1&nofb=1&ipt=b8945748196ac59b7864e3432e218092456540ddc07ea31aab3d14df759b79bb&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Knoppers',
        brand_name: 'Storck',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldofsweets.de%2Fout%2Fpictures%2Fmaster%2Fproduct%2F2%2Fknoppers-15er.jpg&f=1&nofb=1&ipt=4b74344d16d6639c83fbbe959a3945f8ec4f358386f85920d35981f84316250b&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Sun Chips',
        brand_name: 'Sun Chips',
        snack_image: "https://helloomarket.com/image/cache/catalog/143810005-583x593.jpg",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Injera Chips',
        brand_name: 'Tsionafoods',
        snack_image: "https://static.wixstatic.com/media/fa00aa_db76335f7685456483b418a92cc8d11c~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_750,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fa00aa_db76335f7685456483b418a92cc8d11c~mv2_d_3024_4032_s_4_2.jpg",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Crunchy Ethiopian Teff Snacks',
        brand_name: 'Mitmitta',
        snack_image: "https://tefftasticeats.com/cdn/shop/products/TeffSnacks-Mitmitta-Front_d2883a8e-b60b-4660-9050-010b11312a0e_600x.png?v=1680799027",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'St. George Beer',
        brand_name: 'St. George',
        snack_image: "https://2.bp.blogspot.com/-ylSj-yzZMb0/VDJjgZFsfoI/AAAAAAAAMIo/QBBG8ySzxVE/s1600/1-st%2Bgeorge.jpg",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Novida ',
        brand_name: 'Schweppes ',
        snack_image: "https://ethiopianmonitor.com/wp-content/uploads/2020/02/unnamed.jpg",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Snax ',
        brand_name: 'Lae Biscuit Co. Bikpela Na Strongpela ',
        snack_image: "https://static.wixstatic.com/media/064c51_08954f26f0b847758679047740d04bf1~mv2.png/v1/fill/w_249,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Snax%20Beef.png",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Twisties ',
        brand_name: 'Twisties',
        snack_image: "https://goodmanfielder.com/assets/PNG-Pack-Shots/Twisties/HotAndSpicy_Shadow__FillWzU1MCw1MDBd.png",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Gold Nuggets',
        brand_name: 'Paradise Foods. A Taste of Paradise',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhq-SzIeGe9s05PhoKzvxDmVC2Z6x2aqO5QlUU8Tk6A&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'KOKONUT KINA Cookies',
        brand_name: 'Paradise Foods. A Taste of Paradise',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMTT1k0p18SxKrzeHElfNqZodUEFhvqkWr-LK-5P5Cg&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'rokrok',
        brand_name: 'Paradise Foods. A Taste of Paradise',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDpC2yFljAlBR5ji8FBghWaHMU1grqHCG12Hh93BdTw&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Flaming Hot Cheetos',
        brand_name: 'Cheetos',
        snack_image: "https://i.ebayimg.com/images/g/IU4AAOSwKulevP6p/s-l1200.webp",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Oeros',
        brand_name: 'Mondelez International',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv4CF7oq1PpezzZKK8kbhXy1Hdw02gjCyfMqzuz0s6A&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Fritos',
        brand_name: 'PepsiCo',
        snack_image: "https://www.confectionerywarehouse.com.au/cdn/shop/files/US_CHIPS_Fritos_Original_311g_X_10_Bags_1024x1024__91240_1200x1200.jpg?v=1698353922",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Chips Ahoy',
        brand_name: 'Mondelez International',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6c1_bF86TUZatru7I27MSIGnAz73Nx9bGs0nZwYc5A&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Goldfish',
        brand_name: 'Campbell',
        snack_image: "https://usafoods.com.au/cdn/shop/products/SKGFOR066.png?v=1689299264",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Almond Joy',
        brand_name: 'The Hershey Company',
        snack_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaH6d_vGVDBYW8On4mAUsR9TY2Dzxwu6YNX77DvajsXA&s",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Reeses Peanut Butter Cups',
        brand_name: 'The Hershey Company',
        snack_image: "https://www.sweetas.net.au/cdn/shop/products/ScreenShot2023-04-24at4.20.30pm.png?v=1682317270&width=533",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Lucky Charms',
        brand_name: 'General Mills',
        snack_image: "https://i.ebayimg.com/images/g/HeAAAOSw7ptjhZLs/s-l1200.webp",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Hersheys',
        brand_name: 'The Hershey Company',
        snack_image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2Fhersheys.jpg&h=570&w=855&q=100&v=20170226&c=1",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Lays Chips',
        brand_name: 'Frito-Lay, Inc.',
        snack_image: "https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/bltbe1ca50b4be02808/651d960c7370fc0b82c3d9a7/Lay_27s_202019_20Redesign_20-_20Classic_20front_20and_20back-72dpi.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
        user_id: 1,
        date_created: new Date()
    },
    
]

const seedSnack = async () => {
    await Snack.bulkCreate(snackData);
}

module.exports = seedSnack;