import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import { WalletContext } from '../components/walletProvider';

const App = () => {
  // Use the hooks thirdweb give us.
  const walletContext = useContext(WalletContext);
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", walletContext);

  // Initialize our editionDrop contract
  const editionDrop = useEditionDrop("0xf247244ae42FD3AD9bca8F480DD499F867fb8C72");
  // State variable for us to know if user has our NFT.
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  // isClaiming lets us easily keep a loading state while the NFT is minting.
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    // If they don't have an connected wallet, exit!
    if (!walletContext) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(walletContext, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get balance", error);
      }
    };
    checkBalance();
  }, [walletContext, editionDrop]);

  const mintNft = async () => {
    try {
      setIsClaiming(true);
      await editionDrop.claim("0", 1);
      console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  };

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!walletContext) {
    return (
      <div className="landing">
        <h1>Welcome to NarutoDAO</h1>
        <Button variant="contained" onClick={connectWithMetamask}>
          Connect wallet
        </Button>
      </div>
    );
  }

  
  return (
    <div className="mint-nft">
      <h1>Mint your free 🍪DAO Membership NFT</h1>
      <button
        disabled={isClaiming}
        onClick={mintNft}
      >
        {isClaiming ? "Minting..." : "Mint your nft (FREE)"}
      </button>
    </div>
  );
}

export default App;