import Divider from 'components/Divider';

export default function DayTimeList({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* TODO get title as prop */}
      <div>Opening hours</div>
      <div style={{ width: '250px' }}>
        <Divider />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </div>
  );
}
