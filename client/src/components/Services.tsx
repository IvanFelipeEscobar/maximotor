"use client";
import {
  AbsoluteCenter,
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const serviceArr = [
  {
    service: "Brake Service",
    description: `Our comprehensive brake service includes installation of high-quality ceramic pads, cleaning and greasing of all contact points, and resurfacing of rotors for enhanced durability.`,
    img: "/un-liu-yqsgL2wKEHA-unsplash.jpg",
    price: '$180 (Price may vary for certain vehicle models)'
  },
  {
    service: "Oil Change",
    description: `Ensure your vehicle's optimal performance with our oil change service, which includes draining and refilling oil, replacing filters, checking tire pressure, topping off fluids, and conducting a basic safety inspection.`,
    img: "/markus-spiske-tx-9wlZaXq4-unsplash.jpg",
    price: 'Regular - $30, Synthetic - $75 for up to 5 qts (Additional charges may apply for cartridge filter applications)'
  },
  {
    service: "Timing Belt Replacement",
    description: `Get peace of mind with our timing belt replacement service, which includes installation of a new belt, pulleys, tensioner, and water pump when necessary.`,
    img: "/parvez-azarqaderi-YM5HPbFvXIU-unsplash.jpg",
    price: 'Contact us for a personalized estimate based on your vehicle'
  },
  {
    service: "Suspension Repair",
    description: "Enhance your vehicle's ride quality and safety with our suspension repair service, covering shocks, struts, springs, sway bar links, ball joints, and control arms.",
    img: "/joshua-vialdores-yXdAs7284sY-unsplash.jpg",
    price: "Price varies depending on the specific components and repairs needed."
  }, 
  {
    service: "Tune-Up",
    description: "Maximize engine performance and fuel efficiency with our comprehensive tune-up service, including spark plug replacement, air filter replacement, and fuel system cleaning.",
    img: "/julian-hochgesang-zRDcbSvY0xo-unsplash.jpg",
    price: "Price may vary based on your vehicle's make and model"
  },
  {
    service: "Wheel Alignment",
    description: "Ensure even tire wear and precise vehicle handling with our wheel alignment service, covering four-wheel toe-in adjustment (additional charges may apply for camber adjustment).",
    img: "/robert-laursoo-WHPOFFzY9gU-unsplash.jpg",
    price: "$85 (Price for four-wheel toe-in only)"
  }
];
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Services() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
 

  return (
    <Box
      position={"relative"}
      width={"full"}
      overflow={"hidden"}
      id={'services'}
      py={16}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {serviceArr.map( service => (
          <Box
            key={service.service}
            height={"3xl"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${service.img})`}
          >
            <AbsoluteCenter>
              <Box
                minW={"23rem"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"md"}
                p={8}
                bg={"rgba(0,0,0,0.8)"}
                overflow={"hidden"}
                m={1}
              >
                <Stack>
                 
                  <Heading
                    color={"aliceblue"}
                    textTransform={"uppercase"}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                     {service.service}
                  </Heading>
                  <Text fontSize={'lg'} color={"gray.200"}>
                    {service.description}
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text color={"gray.400"}>{service.price}</Text>
                  </Stack>
                </Stack>
              </Box></AbsoluteCenter>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
