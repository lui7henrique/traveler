import { GetStaticPaths, GetStaticProps } from "next";
import prisma from "lib/prisma/client";

import {
  DashboardCityProfileTemplate,
  DashboardCityProfileTemplateProps,
} from "templates/Dashboard/CityProfile";

const CityProfile = (props: DashboardCityProfileTemplateProps) => {
  return <DashboardCityProfileTemplate {...props} />;
};

export default CityProfile;

export const getStaticPaths: GetStaticPaths = async () => {
  const cities = await prisma.city.findMany();

  const paths = cities
    ? cities.map((city) => {
        return { params: { slug: city.slug! } };
      })
    : [];

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  if (params?.slug) {
    const city = await prisma.city.findFirst({
      where: {
        slug: String(params.slug),
      },
    });

    return {
      props: {
        city: JSON.parse(JSON.stringify(city)),
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
    redirect: {
      destination: "/dashboard/city",
    },
  };
};
