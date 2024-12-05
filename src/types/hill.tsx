type Sizes = { sizes: { large: string } };

type Row = { image1: RowImage; image2: RowImage };
type RowImage = { sizes: { large: string } };

export interface Hill {
  id: number;
  title: string;
  featuredImage: string;
  acf: {
    donate_url: string;
    top_image: string;
    about_text: string;
    about_text_2: string;
    coordinates: { latitude: string; longitude: string };
    gallery: { row: Row }[];
    text_on_image: {
      text: string;
      background_image: Sizes;
    };
  };
}
