import Navbar from "../components/about/Navbar";
import Section1 from "../components/Mortgage_Calculator/Section1";
import Section3 from "../components/Mortgage_Calculator/Section3";
import Section4 from "../components/Mortgage_Calculator/Section4";
import Section5 from "../components/Mortgage_Calculator/Section5";
import Section6 from "../components/Mortgage_Calculator/Section6";
import Section7 from "../components/Mortgage_Calculator/Section7";
import Section8 from "../components/Mortgage_Calculator/Section8";
import Section9 from "../components/Mortgage_Calculator/Section9";
// import Chart from "../components/Mortgage_Calculator/chart";
export default function Home() {
    return (
        <>
      <Navbar />
      <Section1 />
       <Section3 />
       <Section4 />
       <Section5 />
       <Section6 />
       <Section7 />
       <Section8 />
        <Section9 />
        {/* <Chart /> */}
        </>
    );
}