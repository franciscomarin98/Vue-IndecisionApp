import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Indecision.vue";

describe("Indecision.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
