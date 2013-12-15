const ScreenShield = imports.ui.screenShield;

let _onUserBecameActiveOrig;

function _onUserBecameActiveInjected()
{
    this.idleMonitor.remove_watch(this._becameActiveId);
    this._becameActiveId = 0;

    let lightboxWasShown = this._lightbox.shown;
    this._lightbox.hide();

    // Shortcircuit in case the mouse was moved before the fade completed
    // or the screen is not locked
    if (!lightboxWasShown || !this._isLocked)
    {
        this.deactivate(false);
        return;
    }
}

function init()
{
}

function enable()
{
    _onUserBecameActiveOrig =
        ScreenShield.ScreenShield.prototype._onUserBecameActive;
    ScreenShield.ScreenShield.prototype._onUserBecameActive =
        _onUserBecameActiveInjected;
}

function disable()
{
    ScreenShield.ScreenShield.prototype._onUserBecameActive =
        _onUserBecameActiveOrig;
}
