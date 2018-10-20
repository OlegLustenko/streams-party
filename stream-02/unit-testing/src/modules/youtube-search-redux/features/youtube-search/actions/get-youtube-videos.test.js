import sinon from 'sinon';

import {getYoutubeVideosCreator} from './get-youtube-videos';

describe('(Action) getYoutubeVideos', () => {
  const selectYoutubeSearchTermAction = 'selectYoutubeSearchTermAction';
  const selectYoutubeSearchTerm = sinon.stub().returns(selectYoutubeSearchTermAction);
  const getVideoByTermAction = [1, 2, 2];
  const youtubeSearchAPI = {
    getVideoByTerm: sinon.stub().resolves(getVideoByTermAction),
  };

  const setYoutubeVideosAction = 'setYoutubeVideosAction';
  const setYoutubeVideos = sinon.stub().returns(setYoutubeVideosAction);
  const setSelectedVideos = sinon.stub();
  const dispatchStub = sinon.spy();

  const getStateStubAction = 'getStateStubAction';
  const getStateStub = sinon.stub().returns(getStateStubAction);

  let getYoutubeVideos = getYoutubeVideosCreator({
    selectYoutubeSearchTerm,
    youtubeSearchAPI,
    setYoutubeVideos,
    setSelectedVideos,
  })();

  beforeEach(async () => {
    await getYoutubeVideos(dispatchStub, getStateStub);
  });

  afterEach(() => {
    youtubeSearchAPI.getVideoByTerm.resetHistory();
    setYoutubeVideos.resetHistory();
    dispatchStub.resetHistory();
    getStateStub.resetHistory();
    selectYoutubeSearchTerm.resetHistory();
  });

  it('getState called once', () => {
    expect(getStateStub.calledOnce).toBe(true);
  });

  it('should call selectYoutubeSearchTerm with result from getState', () => {
    expect(selectYoutubeSearchTerm.calledWith(getStateStubAction)).toBe(true);
  });

  it('should call youtubeSearchAPI getVideoByTerm with result from selectYoutubeSearchTerm', () => {
    expect(youtubeSearchAPI.getVideoByTerm.calledWith(selectYoutubeSearchTermAction)).toBe(true);
  });

  xit('should call youtubeSearchAPI getVideoByTerm with result from selectYoutubeSearchTerm', () => {
    expect(youtubeSearchAPI.getVideoByTerm).resolves;
  });

  it('should call setYoutubeVideos called with result from getVideoByTerm', () => {
    expect(setYoutubeVideos.calledWith(getVideoByTermAction)).toBe(true);
  });

  it('should call dispatch with result of setYoutubeVideos', () => {
    expect(dispatchStub.calledWith(setYoutubeVideosAction)).toBe(true);
  });
});
