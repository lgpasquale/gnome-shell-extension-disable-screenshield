const ScreenShield = imports.ui.screenShield;

let _onUserBecameActiveOrig;

function _onUserBecameActiveInjected()
{
    this.idleMonitor.remove_watch(this._becameActiveId);
    this._becameActiveId = 0;

    this._longLightbox.hide();
    this._shortLightbox.hide();

    this.deactivate(false);
    return;
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
