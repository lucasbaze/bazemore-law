import Image from 'next/image';
import {
  Printer,
  Building,
  HomeIcon,
  Phone,
  Mail,
  Paperclip,
} from 'lucide-react';

const services = [
  {
    image: '/cow-girls.jpg',
    imageAlt: 'Cow girls',
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
    image: '/families.jpg',
    imageAlt: 'Families',
    title: 'Estate Planning',
    description:
      'Estate planning is more than just asking, “Where will my stuff go when I die?” More importantly, what happens to your family and responsibilities if you are incapacitated or need long term skilled care?',
  },
  {
    image: '/cotton.jpg',
    imageAlt: 'Cotton Fields',
    title: 'Probate',
    description:
      'Settling the affairs of a loved one is often a tiring and thankless job. And, if you don’t have a Will, the State of Texas decides where your stuff will go. We can help plan to get it right and navigate the court process.',
  },
  {
    image: '/windmills.jpg',
    imageAlt: 'Windmills',
    title: 'Series LLC',
    description:
      'A series LLC is a holding company that can segregate assets under independent series for liability protection without the cost and headache of setting up multiple companies (e.g. rent houses) and is a good solution to segregate trust assets from business assets for protection of future generations.',
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="mt-20 relative">
        <div
          className="relative w-full h-[800px] md:h-[600px] bg-center bg-cover flex items-center"
          style={{ backgroundImage: "url('/amarillo-skyliune.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-orange-100 opacity-50"></div>
          {/* Content */}
          <div className="relative max-w-7xl flex flex-col p-1 md:mt-0 md:px-10 mx-auto sm:pt-10 md:flex-row items-center z-20">
            <div className="flex items-center justify-center pr-0 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
              <Image
                src="/bazemore-head-shot.jpg"
                alt="Robert Bazemore"
                height={325}
                width={325}
              />
            </div>
            <div className="flex-1 flex-col content-center items-center p-6 leading-snug bg-white h-[325px] w-[325px] md:w-full">
              <h1 className="text-3xl md:text-3xl font-bold leading-snug">
                Robert Bazemore
              </h1>
              <p className="mt-6 mb-8 text-2xl sm:mb-12 leading-snug max-w-2xl">
                Attorney Robert Bazemore is a life-long entrepreneur with over
                30 years combined experience in business, healthcare and law.
              </p>{' '}
              <div className="">
                <a
                  className="text-center px-5 py-3 bg-blue-800 text-white shadow-md"
                  href="tel:8069942060"
                >
                  Call Robert: (806) 994-2060
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center mb-16">
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
              </div>
              <div className="p-8">
                <div className="font-bold text-2xl pb-4">{service.title}</div>
                <p className="text-gray-600 font-sans">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Separator */}
      <section className="container py-24">
        <div className="w-full">
          <Image
            src="/cowboys.jpg"
            alt="Robert Bazemore, Esq."
            width={300}
            height={200}
            className="w-full md:w-1/3 mx-auto h-auto object-cover mb-6"
          />
        </div>
        <div className="max-w-2xl mx-auto text-2xl md:text-3xl text-center mb-12">
          West Texas seniors and their families are a diverse blend of
          good-natured, down-to-earth people that are always willing to offer a
          helping hand to those in their community.
        </div>
        <div className="text-center">
          <a
            className="text-center px-5 py-3 bg-blue-800 text-white shadow-md"
            href="tel:8069942060"
          >
            Call Robert: (806) 994-2060
          </a>
        </div>
      </section>

      {/* Profile Info */}
      <section className="bg-gray-100 py-24">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Image Section */}
          <div className="w-full">
            <Image
              src="/bazemore-full-shot.jpg"
              alt="Robert Bazemore, Esq."
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full bg-white p-8 md:p-12 flex flex-row items-center">
            <div className="">
              <h2 className="text-3xl font-bold mb-4">Robert Bazemore, Esq.</h2>
              <hr className="w-16 border-t-2 border-black mb-4" />
              <p className="text-gray-700 leading-relaxed">
                Robert is the founder of Bazemore Law Firm PLLC. He holds a
                degree in business administration from LeTourneau University and
                a doctorate degree in law from South Texas College of Law –
                Houston. He is accredited by the Veterans Administration and is
                a member of the National Academy of Elder Law Attorneys, Elder
                Counsel, the State Bar of Texas – Real Estate, Probate & Trust
                Law Section, Elder Law Answers, and multiple other relevant
                associations. He was awarded a Presidential Management
                Fellowship in Washington, D.C. after law school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pt-24 pb-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 leading-relaxed text-center">
          Get in Touch
        </h2>
        <div className="container flex flex-col md:flex-row">
          {/* <!-- Address and Contact Information --> */}
          <div className="w-full md:w-1/3 mb-12">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <div className="font-sans mb-8">
              <p className="mb-2">
                <Building className="w-4 inline-block mr-2" />
                Bazemore Law Firm PLLC
              </p>
              <p className="mb-2">
                <Mail className="w-4 inline-block mr-2" />
                Mailing: P.O. Box 66 <br />
                <span className="pl-6">Tulia, TX 79088</span>
              </p>
              <p className="mb-2">
                <HomeIcon className="w-4 inline-block mr-2" />
                Address: First National Bank <br />
                <span className="pl-6">103 N. Maxwell Ave.</span> <br />
                <span className="pl-6">Tulia, TX 79088</span>
              </p>
              <p className="mb-2">
                <Phone className="w-4 inline-block mr-2" />
                <a href="tel:8063294601">Phone: (806) 994-2060</a>
              </p>
              <p className="mb-2">
                <Printer className="w-4 inline-block mr-2" /> Fax: (806)
                370-3732
              </p>
              <p className="mb-2">
                <Paperclip className="w-4 inline-block mr-2" />
                <a href="mailto:bazemorelaw@gmail.com">bazemorelaw@gmail.com</a>
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-2">Office Hours:</h3>
              <p className="font-sans">
                <i>By appointment only</i>
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                className="text-center px-3 py-2 bg-blue-800 text-white shadow-md"
                target="_blank"
                href="https://secure.lawpay.com/pages/bazemore-law-firm-pllc/operating"
              >
                Pay Invoice
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 mx-auto text-center">
            {/* <!-- Google Map Embed --> */}
            <div className="flex justify-stretch" style={{ height: '500px' }}>
              <iframe
                className="w-full h-full border-0 mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12265.884323571261!2d-101.77488541660193!3d34.53927586389213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870199e56d8efeed%3A0x43163208bfae4d9!2sFirst%20National%20Bank!5e0!3m2!1sen!2sus!4v1725139973765!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
