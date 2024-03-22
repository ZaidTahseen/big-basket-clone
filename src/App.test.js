import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "./context/products";

describe("App Component", () => {
  test.only("renders without crashing", async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Product List/i)).toBeInTheDocument();
  });

  test("renders 10 card on Products component", async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );

    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(10 + 1);
  });

  test("renders Cart component when at route /cart", () => {
    window.history.pushState({}, "", "/cart");

    render(
      <Provider>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });
});
