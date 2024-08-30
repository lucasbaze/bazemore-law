import InstallCode from '@/components/installcode';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    image: '/older-couple.jpg',
    imageAlt: 'Older couple',
    title: 'Trusts',
    description:
      'A trust might be a valuable tool in planning for long term care or simply asset protection, but how do you know which trust is the best “fit” for your circumstances? Or, if you really need one at all?',
  },
  {
    image: '/older-couple.jpg',
    imageAlt: 'Older couple',
    title: 'Medicaid for Elderly',
    description:
      'Most families are not independently wealthy and nursing home costs continue to skyrocket. Navigating the gauntlet of Medicaid for the elderly without losing your life savings is daunting and requires a broad knowledge of the traps and pitfalls of the state Medicaid rules and system.',
  },
  {
    image: '/older-couple.jpg',
    imageAlt: 'Older couple',
    title: 'Estate Planning',
    description:
      'Estate planning is more than just asking, “Where will my stuff go when I die?” More importantly, what happens to your family and responsibilities if you are incapacitated or need long term skilled care?',
  },
  {
    image: '/older-couple.jpg',
    imageAlt: 'Older couple',
    title: 'Probate',
    description:
      'Settling the affairs of a loved one is often a tiring and thankless job. And, if you don’t have a Will, the State of Texas decides where your stuff will go. We can help plan to get it right and navigate the court process.',
  },
  {
    image: '/older-couple.jpg',
    imageAlt: 'Older couple',
    title: 'Series LLC',
    description:
      'A series LLC is a holding company that can segregate assets under independent series for liability protection without the cost and headache of setting up multiple companies (e.g. rent houses) and is a good solution to segregate trust assets from business assets for protection of future generations.',
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="py-24">
        <div className="max-w-7xl flex flex-col p-1 md:px-10 mx-auto sm:pt-10 lg:flex-row items-center gap-8">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <Image
              src="/bazemore-head-shot.jpg"
              alt=""
              height={350}
              width={350}
              className="rounded-sm"
            />
          </div>
          <div className="flex-1 flex-col justify-center p-6 text-center rounded-sm lg:text-left leading-snug">
            <h1 className="text-5xl font-bold leadi leading-snug">
              Robert Bazemore
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12 leading-snug max-w-2xl">
              Attorney Robert Bazemore is a life-long entrepreneur with over 30
              years combined experience in business, healthcare and law.
            </p>{' '}
            <div>Call For Consultation: (806) 994-2060</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">Our Law Services</h2>
          <p className="text-gray-600 font-sans text-2xl">
            Thoughtful legal planning for the Golden Years of life
          </p>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 max-w-sm"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="absolute -bottom-4 left-1/2 text-nowrap transform -translate-x-1/2 bg-blue-800 text-white font-bold py-2 px-4 rounded-none text-xl">
                  {service.title}
                </div>
              </div>
              <div className="px-8 py-12 font-sans">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Separator */}
      <section className="py-12">
        <div className="w-full">
          <Image
            src="/cowboys.jpg"
            alt="Robert Bazemore, Esq."
            width={300}
            height={200}
            className="w-1/3 mx-auto h-auto object-cover mb-6"
          />
        </div>
        <div className="max-w-2xl mx-auto text-3xl text-center">
          West Texas seniors and their families are a diverse blend of
          good-natured, down-to-earth people that are always willing to offer a
          helping hand to those in their community.
        </div>
      </section>

      {/* Profile Info */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src="/bazemore-full-shot.jpg"
              alt="Robert Bazemore, Esq."
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Robert Bazemore, Esq.</h2>
            <hr className="w-16 border-t-2 border-black mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Robert is the founder of Bazemore Law Firm PLLC. He holds a degree
              in business administration from LeTourneau University and a
              doctorate degree in law from South Texas College of Law – Houston.
              He is accredited by the Veterans Administration and is a member of
              the National Academy of Elder Law Attorneys, Elder Counsel, the
              State Bar of Texas – Real Estate, Probate & Trust Law Section,
              Elder Law Answers, and multiple other relevant associations. He
              was awarded a Presidential Management Fellowship in Washington,
              D.C. after law school.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white p-8">
        <div className="container mx-auto text-center">
          {/* <!-- Address and Contact Information --> */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              4710 67th Street, Suite F • Lubbock, Texas 79414
            </h2>
            <p className="text-lg">Phone (806) 329-4601 | Fax (806) 370-3732</p>
          </div>

          {/* <!-- Google Map Embed --> */}
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-3/4 lg:w-1/2 h-80 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8351475478676!2d-101.93148352436686!3d33.53049063478244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe0b9dbdd4031f%3A0xb6f594f914f4972e!2s4710%2067th%20St%2C%20Lubbock%2C%20TX%2079414%2C%20USA!5e0!3m2!1sen!2sin!4v1695993333445!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
