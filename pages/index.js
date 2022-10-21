import getImageColors from "get-image-colors";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Parent from "./components/parent/Parent";
import Toolbar from "./components/toolbar/Toolbar";

export default function Home() {
  const [img, setImg] = useState();
  const [colors, setColors] = useState([]);

  const onImageChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (img !== undefined) {
      console.log(img);
      getImageColors(img).then((colors) => {
        // `colors` is an array of color objects
        setColors(colors);
      });
    }
  }, [img]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-[100vh]">
        <Header />
        <Parent img={img} />
        {/* <LocalView/> */}
        <Toolbar onImageChange={onImageChange} img={img} />
      </main>
    </>
  );
}
