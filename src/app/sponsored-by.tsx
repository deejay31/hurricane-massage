"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-8">
          SERVICES
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6 ">
          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/kids-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                KIDS MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P250
              </Typography>
              <Typography>
                For children offers a lot of health benefits. It is human nature
                to touch as a way of showing love and affection. This touch
                stimulates the body in positive ways to help it grow and
                develop. Massage is beneficial at any age but because children
                are still developing it can be especially helpful for them.
                Parent-child massage is a wonderful way to bond with your
                children while offering them health benefits
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/combination-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                COMBINATION MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P299
              </Typography>
              <Typography>
                The therapist uses a skill to combine techniques from multiple
                massage types to best benefit your specific needs. It can
                combine techniques from thai, swedish, deep tissue, accupressure
                and reflexology. Combination allows you to enjoy multiple
                techniques in one session.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/shiatsu-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                SHIATSU MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P299
              </Typography>
              <Typography>
                Pressure applied to points on the body promotes energy flow and
                corrects disharmonies throughout the patient's body. In addition
                to being a deeply relaxing experience. Shiatsu helps relieve
                stress. Treat pain and illness and contributes to a patient's
                overall health and well being.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/swedish-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                SWEDISH MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P300
              </Typography>
              <Typography>
                Primary goals of the swedish massage technique is to relax the
                entire body. This is accomplished by rubbing the muscles with
                long gliding strokes in the direction of blood returning to the
                heart. But swedish massage therapy goes beyond relaxation.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/thai-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                THAI MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P399
              </Typography>
              <Typography>
                Relieve tension headaches, reduce types of back pain typically
                subacute and chronic nonspecific back pain. Relieve muscle pain
                and spasticity as well as joint stiffness and pain. Increase
                flexibility and range of motion. Stimulate circulation and
                tymphatic drainage. Boost energy.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/aroma-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                AROMA SIGNATURE MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour-30mins - P599
              </Typography>
              <Typography>
                This is truly a special treat from our expert Male and Female
                Therapists that offers multisensory experience and therapeutic
                approach. Get a relaxing massage in the comfort of your Home,
                Hotel or Condo.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/prenatal-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                PRE-NATAL MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P399
              </Typography>
              <Typography>
                Help for your pregnancy aches and pains. Prenatal massage is a
                type that's similar to regular massage – it aims to relax tense
                muscles, ease sore spots, mprove circulation and mobility, and
                just make you feel good. But prenatal massage is also customized
                to the needs of pregnant women and their changing bodies, and
                therapists trained in prenatal massage adjust their techniques
                accordingly.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/twin-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                TWIN MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                1hour - P599
              </Typography>
              <Typography>
                Holistic treatment that calms the body by using a combination of
                gentle stretches, acupressure, reflexology, and aromatherapy to
                stimulate the flow of blood by the two therapist.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/ear-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
              EAR CANDLING w/ MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
              1hour - P299
              </Typography>
              <Typography>
              Ear Candling w/ Massage. A special treat for your love ones. 
              Rejuvenate your whole body with body massage together with Ear Candling therapy.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/foot-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
              FOOT SPA & SCRUB w/ MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
              1hour-30mins - P499
              </Typography>
              <Typography>
              Holds great importance in many cultures. In Indian tradition, 
              foot massage has played an integral part of defining the dynamics of relationships for thousands of years, 
              while in ancient Egypt, 
              drawings on the burial site of pharaohs are believed to show reflexology points
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/ventosa-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
              VENTOSA w/ MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
              1hour-30mins - P599
              </Typography>
              <Typography>
              Encourage blood flow and sedate the nervous system. Which makes it an excellent treatment for high blood pressure. 
              Stiff muscles, anxiety, fatigue, migraines, 
              rheumatism and even cellulite.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 h-[545px]">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/image/body-scrub-massage.JPG"
                alt="card-image"
                className="size-full shrink-0"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
              BODY SCRUB w/ MASSAGE
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
              1hour-30mins - P599
              </Typography>
              <Typography>
              Treat your family and friend with Body Scrub with Massage. 
              Treat yourself or another and relax and unwind in cozy and soothing surroundings.
              </Typography>
            </CardBody>
          </Card>
          {/**SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))**/}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
