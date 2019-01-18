export default function preventScrollOnMobile() {
  let originalOnTouchMove;

  const preventAction = (e?: any) => {
    // @ts-ignore
    if (!this.isTouching) return;
    if (e) e.preventDefault();

    return false;
  };

  if (!preventAction()) {
    originalOnTouchMove = document.ontouchmove;
  }

  document.ontouchmove = preventAction;
  document.ontouchmove = preventAction; // no joke: only the second one (.ontouchmove) works on mobile safari :)

  return () => {
    document.ontouchmove = originalOnTouchMove;
  };
}
