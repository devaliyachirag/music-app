import { FC, ReactNode, createContext, useState } from "react";
import soni from "../assets/soni-de.jpg";
import Home from "../pages/Home";

interface Music {
  url: string;
  image: string;
  caption: string;
  artist?:string
}
interface MusicContext {
  list: Music[];
  index: number;
  setIndex: (i: number) => void;
  mode: boolean;
  setMode: (m:boolean) => void;
}
interface MusicChildren {
  children: ReactNode;
}
export const List = createContext<MusicContext | undefined>(undefined);
const MusicList: FC<MusicChildren> = ({ children }) => {
  // const list: Music[] = [
  //   {
  //     url: "audio/soni-de-nakhre.mp3",
  //     image: soni,
  //     caption: "soni de nakhre sone lagte",
  //   },
  //   {
  //     url: "audio/dil-mein-baji-guitar.mp3",
  //     image:
  //       "https://c.saavncdn.com/171/Apna-Sapna-Money-Money-Hindi-2006-20230304134344-500x500.jpg",
  //     caption: "dil-mein-baji-guitar.mp3",
  //   },
  //   {
  //     url: "audio/ghor-andhari-re.mp3",
  //     image:
  //       "https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe9ZZjLWy/size_m.jpg",
  //     caption: "ghor andhari re rataldi ",
  //   },
  //   {
  //     url: "audio/m1.mp3",
  //     image:
  //       "https://c.saavncdn.com/487/Partner-Hindi-2007-20221203161320-500x500.jpg  ",
  //     caption: "dupatta tera no rang da",
  //   },
  //   {
  //     url: "audio/Makrane Bethi Mari Mavadi - આશ પૂરી કરે મારી માવડી - Ramzat 3 રમઝટ 3 Nonstop Garba 2019 - Osman Mir.mp3",
  //     image:
  //       "https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/AJbDpy1Xbn/size_m.webp",
  //     caption: "makrane bethi mari hinglaj",
  //   },
  //   {
  //     url: "audio/Le Gayi _ Full Song _ Dil To Pagal Hai _ Shah Rukh Khan, Karisma Kapoor _ Asha Bhosle, Udit Narayan.mp3",
  //     image:
  //       "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ba/66/eaba6676-f880-5e35-be35-ba2edc06f7ba/Le_Gayi_Le_Gayi_Male_Version.jpg/1200x1200bb.jpg",
  //     caption: "le gayi le gayi",
  //   },
  //   {
  //     url: "audio/soni-de-nakhre.mp3",
  //     image: soni,
  //     caption: "soni de nakhre sone lagte",
  //   },
  //   {
  //     url: "audio/dil-mein-baji-guitar.mp3",
  //     image:
  //       "https://c.saavncdn.com/171/Apna-Sapna-Money-Money-Hindi-2006-20230304134344-500x500.jpg",
  //     caption: "dil-mein-baji-guitar.mp3",
  //   },
  //   {
  //     url: "audio/ghor-andhari-re.mp3",
  //     image:
  //       "https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe9ZZjLWy/size_m.jpg",
  //     caption: "ghor andhari re rataldi ",
  //   },
  //   {
  //     url: "audio/m1.mp3",
  //     image:
  //       "https://c.saavncdn.com/487/Partner-Hindi-2007-20221203161320-500x500.jpg  ",
  //     caption: "dupatta tera no rang da",
  //   },
  //   {
  //     url: "audio/Makrane Bethi Mari Mavadi - આશ પૂરી કરે મારી માવડી - Ramzat 3 રમઝટ 3 Nonstop Garba 2019 - Osman Mir.mp3",
  //     image:
  //       "https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/AJbDpy1Xbn/size_m.webp",
  //     caption: "makrane bethi mari hinglaj",
  //   },
  //   {
  //     url: "audio/Le Gayi _ Full Song _ Dil To Pagal Hai _ Shah Rukh Khan, Karisma Kapoor _ Asha Bhosle, Udit Narayan.mp3",
  //     image:
  //       "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ba/66/eaba6676-f880-5e35-be35-ba2edc06f7ba/Le_Gayi_Le_Gayi_Male_Version.jpg/1200x1200bb.jpg",
  //     caption: "le gayi le gayi",
  //   },
  // ];
  const list : Music[] = [
    {
      caption: "Lunar Cycles",
      image:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      url: "https://mp3.chillhop.com/serve.php/?mp3=10031",
    },
    {
      caption: "Woodnote",
      image:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod, Imagiro",
      url: "https://mp3.chillhop.com/serve.php/?mp3=13014",
    },
    {
      caption: "Waterfalls",
      image:
        "https://chillhop.com/wp-content/uploads/2021/03/4f968562d372586b08590bf29066c638ee8fda64-1024x1024.jpg",
      artist: "G Mills, Molly McPhaul",
      url: "https://mp3.chillhop.com/serve.php/?mp3=16195",
    },
    {
      caption: "Cruising",
      image:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      artist: "Evil Needle",
      url: "https://mp3.chillhop.com/serve.php/?mp3=17087",
    },
    {
      caption: "Keep Going",
      image:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      url: "https://mp3.chillhop.com/serve.php/?mp3=9222",
    },
    {
      caption: "Flowers",
      image:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Xander",
      url: "https://mp3.chillhop.com/serve.php/?mp3=11249",
    },
    {
      caption: "Under the City Stars",
      image:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      url: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    },
    {
      caption: "Daylight",
      image:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      url: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    },
    {
      caption: "Sonar",
      image:
        "https://chillhop.com/wp-content/uploads/2020/05/16bcbe48680098798af04f176daae3693839238d-1024x1024.jpg",
      artist: "Invention",
      url: "https://mp3.chillhop.com/serve.php/?mp3=8288",
    },
    {
      caption: "Desire",
      image:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      url: "https://mp3.chillhop.com/serve.php/?mp3=10554",
    },
    {
      caption: "Stay",
      image:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Swum",
      url: "https://mp3.chillhop.com/serve.php/?mp3=7998",
    },
    {
      caption: "Nightfall",
      image:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      url: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },
    {
      caption: "Reflection",
      image:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      url: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    },
    {
      caption: "Beaver Creek",
      image:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      url: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    },
    //ADD MORE HERE
  ]
  const [mode, setMode] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const contextValue = {
    list,
    index,
    setIndex,
    mode,
    setMode
  };

  return <List.Provider value={contextValue}>{children}</List.Provider>;
};

export default MusicList;
