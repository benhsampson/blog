const SplitContainerCode = ({ children }: { children: React.ReactNode }) => (
  <div className="">
    <div className="sticky top-0 max-h-screen overflow-auto">{children}</div>
  </div>
);

const SplitContainerText = ({ children }: { children: React.ReactNode }) => (
  <div className="prose max-w-full">{children}</div>
);

const SplitContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full grid grid-cols-2 gap-4">{children}</div>
);

SplitContainer.Code = SplitContainerCode;
SplitContainer.Text = SplitContainerText;

export default SplitContainer;
