import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import MovieV1 from '../../../models/movie_v1';
import { IMovieDetail } from '@interface';

type Data = {
  message: string;
  data?: IMovieDetail | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToDatabase();
  const data = {
    id: 1,
    name: 'Gundam: Requiem For Vengeance',
    mm_name: 'Gundam: Requiem For Vengeance',
    overview:
      'Gundam: Requiem for Vengeance  "One Year"စစ်ပွဲအပြီးမှာ Zeonရဲ့ခေါင်းဆောင်၊အာကာသကိုလိုနီမဟာမိတ်ဖြစ်သူက ကမ္ဘာမြေအဖွဲ့ချုပ်ကို ဆန့်ကျင်ပြီး စစ်ပွဲစခဲ့ပါတယ်။  စစ်ပွဲစပြီး ၁၁လအကြာမှာတော့ ကမ္ဘာမြေအဖွဲ့ချုပ်ကနေ Zeonတပ်ဖွဲ့အခြေစိုက်စခန်းဖြစ်တဲ့ အရှေ့ဥရောပကို သိမ်းပိုက်ဖို့ ကြိုးစားတဲ့အခါ...။  Zeon လေယာဥ်မှူးနဲ့ "ဝံပုလွေနီ"အုပ်စုရဲ့ခေါင်းဆောင်ဖြစ်သူ "Iria Solari"က ကမ္ဘာမြေအဖွဲ့ချုပ်ကို ဆန့်ကျင်ပြီး အရှေ့ဥရောပမျက်နှာစာကို ဘယ်လိုကာကွယ်သွားမလဲ❔  Review By Alia💚  === Genre: Mecha, Military science fiction, Slasher Released: October 17, 2024 Runtime: 23–25 minutes Episodes: 6  #Gundam_RequiemForVengeance #anime #mecha #military_scrience #SK #SoulAnime #TheSoulKingdom',
    cover_path:
      'https://images.soulkingdom.net/440x660/rc-upload-1730703239394-14IMG_20241103_113612_496.jpg',
    backdrop_path:
      'https://images.soulkingdom.net/500x282/rc-upload-1730703239394-17IMG_20241103_120235_209.jpg',
    genres: [
      {
        id: 27,
        name: 'anime',
        title: 'anime',
        count: 1
      }
    ],
    trailer_link: '',
    trailer_embedded_url: '',
    rating: 0,
    released_date: '2024-10-17',
    slug: 'gundam',
    casts: [],
    network: {
      id: 18,
      name: 'Netflix'
    },
    show_type: 'TV Show',
    last_season: 2,
    last_episode: 6,
    created_at: new Date().toISOString(),
    published: true,
    streaming_id: 'some_streaming_id'
  };
  switch (req.method) {
    case 'GET':
      res.status(200).json({ message: 'Movie fetched successfully', data });
      break;
    case 'POST':
      res.status(201).json({ message: 'Movie created successfully' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
