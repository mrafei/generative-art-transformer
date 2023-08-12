import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IMAGE_INPUT_TEST_ID, IMAGE_SUBMIT_BUTTON_ID } from "@/constants/tests";
import Dashboard from "@/components/Dashboard";

describe("Dashboard", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });
  test("I expect to see the image input.", () => {
    const input = screen.queryByTestId(IMAGE_INPUT_TEST_ID);
    expect(input).toBeInTheDocument();
  });
  describe("Setting the correct image input value", () => {
    test("I expect to see error toast", async () => {
      const input = await screen.findByTestId(IMAGE_INPUT_TEST_ID);
      const button = await screen.findByTestId(IMAGE_SUBMIT_BUTTON_ID);
      expect(button).toHaveAttribute("disabled");
      await userEvent.type(input, "https://picsum.photos/id/10/2500/1667");
      expect(button).not.toHaveAttribute("disabled");
      await userEvent.click(button);
    });
  });
});
