// Sound engine disabled - silent interactions
class SoundEngine {
  public enabled: boolean = false;

  public toggleSound(): boolean {
    this.enabled = false;
    return false;
  }

  public playHover() {}
  public playClick() {}
  public playChime() {}
  public playVictory() {}
}

export const sound = new SoundEngine();
