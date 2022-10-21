export default function Coin({ name, short, usd, image }) {
  return (
    <div>
      <br />
      <p>
        {name} -- {short} -- {usd}
      </p>
    </div>
  );
}
