import { render } from "@testing-library/react";
import SlideTest from "@/components/slideTests";

describe("SlideTest", () => {
  test("SlideTest Test", () => {
    const component = render(<SlideTest />);
    
    console.log(component);
  });
  
})