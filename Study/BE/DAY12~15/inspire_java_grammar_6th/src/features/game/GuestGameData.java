package features.game;

public class GuestGameData {
    private int userCount;
    private int randomNumber;

    public GuestGameData(int userCount, int randomNumber) {
        this.userCount = userCount;
        this.randomNumber = randomNumber;
    }

    public void addUserCount() {
        this.userCount++;
    }

    public int getUserCount() {
        return userCount;
    }

    public int getRandomNumber() {
        return randomNumber;
    }

}
