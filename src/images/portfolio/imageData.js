

const images = require.context('./desktop', false, /\.jpg/);
const test = images('./image-228b.jpg');
console.log(test, 'hi');
const imageData = [
  {
    img: images('./image-edelweiss.jpg'),
    alt: 'Edelweiss pic',
    title: 'Grand Edelweiss Hotel',
    subtitle: 'December 2013',
  },
  {
    img: images('./image-eebox.jpg'),
    alt: 'Eebox Building pic',
    title: 'Eebox Building',
    subtitle: 'August 2017',
  },
  {
    img: images('./image-federal.jpg'),
    alt: 'Federal II Tower pic',
    title: 'Federal II Tower',
    subtitle: 'March 2017',
  },
  {
    img: images('./image-hypers.jpg'),
    alt: 'Hypers pic',
    title: 'Hypers',
    subtitle: 'January 2012',
  },
  {
      img: images('./image-228b.jpg'),
      alt: '228b Tower pic',
      title: '228B Tower',
      subtitle: 'April 2016',
  },
  {
      img: images('./image-del-sol.jpg'),
      alt: 'Project del Sol pic',
      title: 'Project del Sol',
      subtitle: 'January 2016',
  },
  {
      img: images('./image-prototype.jpg'),
      alt: 'Le Prototype pic',
      title: 'Le Prototype',
      subtitle: 'October 2015',
  },
  {
    img: images('./image-netcry.jpg'),
    alt: 'Netcry Tower pic',
    title: 'Netcry Tower',
    subtitle: 'August 2012',
  },
  {
    img: images('./image-paramour.jpg'),
    alt: 'Project Paramourpic',
    title: 'Project Paramour',
    subtitle: 'Febrary 2008',
  },
  {
    img: images('./image-seraph.jpg'),
    alt: 'Seraph Station pic',
    title: 'Seraph Station',
    subtitle: 'September 2019',
  },
  {
    img: images('./image-sxiv.jpg'),
    alt: 'SXIV Towerpic',
    title: 'SXIV Tower',
    subtitle: 'March 2011',
  },
  {
    img: images('./image-trinity.jpg'),
    alt: 'Trinity Bank Tower pic',
    title: 'Trinity Bank Tower',
    subtitle: 'September 2010',
  },
];

export default imageData;