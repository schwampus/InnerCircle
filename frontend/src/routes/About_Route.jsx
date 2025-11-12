import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

export default function About() {
  return (
    <>
      <section className="wrapper-dark min-h-[80svh] font-kanit">
        <h1 className="text-3xl text-center text-(--orange-main) py-6">
          About us
        </h1>
        <section className="max-w-3xl mx-auto px-8 py-6">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            InnerCircle brings you closer to the people who inspire you. Follow
            your favorite skiers, surfers, climbers and other extreme athletes,
            as they share their journey in real-time. Get exclusive
            behind-the-scenes content, breaking news about their latest
            adventures, and direct access to the people shaping your world. But
            it's more than just following — it's about supporting. Through
            InnerCircle, you can directly sponsor the icons you believe in,
            helping them continue doing what they love while getting closer to
            their inner circle.
          </p>
          <Button variant="solid" color="secondary">
            <Link to="/categories">EXPLORE CIRCLES</Link>
          </Button>
        </section>
        <section className="bg-(--purple-dark) w-full min-h-64 text-(--orange-main) px-8 py-10">
          <h2 className="font-bold text-2xl mb-4 text-center">
            More about the circles:
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Each circle is an exclusive community around an athlete icon. As a
            member, you get the freshest updates, exclusive content, and the
            chance to directly support your favorites through sponsorships. It's
            a direct connection between you and the people you admire — no
            middleman, no noise, just authentic engagement and real support.
          </p>
        </section>
        <section className="bg-(--purple-darker) w-full min-h-64 text-(--orange-main) px-8 py-10">
          <h2 className="font-bold text-2xl mb-4 text-center">
            WE ARE INNERCIRCLE:
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <img
                src=""
                alt="Hampus"
                className="w-64 h-64 rounded-full object-cover border-4 border-(--orange-main) shadow-lg mx-auto"
              />
              <p className="text-gray-300 mt-4 text-lg font-medium">Hampus</p>
            </div>
            <div className="text-center">
              <img
                src="/olha-c.jpg"
                alt="Olha"
                className="w-64 h-64 rounded-full object-cover border-4 border-(--orange-main) shadow-lg mx-auto"
              />
              <p className="text-gray-300 mt-4 text-lg font-medium">Olha</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
